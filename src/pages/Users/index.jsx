import { useState, useEffect } from "react";

import { uniqueId } from "lodash";
import filesize from "filesize";

import { ListUsers } from "../../components/ListUsers";
import { Header } from "../../components/Header";
import { Upload } from "../../components/Upload";
import { FileList } from "../../components/FileList";
import { Container } from "./styles";
import { api } from "../../service/api";
import { Redirect } from "react-router-dom";

export function Users() {
  const [isNav, setIsNav] = useState(false);
  const [uploadedFiles, setUploadsFile] = useState([]);
  const [enter, setEnter] = useState(false);
  const [user, setUser] = useState(false);

  function handleUpload(files) {
    const uploadFile = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));
    const aux = uploadedFiles.concat(uploadFile);
    setUploadsFile(aux);
    uploadFile.forEach((file) => {
      processUpload(file, aux);
    });
  }

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get("posts");
        if (response.data !== undefined) {
          const uploadedFile = response.data.map((file) => ({
            id: file._id,
            name: file.name,
            readableSize: filesize(file.size),
            preview: file.url,
            uploaded: true,
            url: file.url,
          }));
          setUploadsFile(uploadedFile);
        }
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    if (!enter) {
      getPosts();
      setEnter(true);
    }
  }, [uploadedFiles, enter]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsNav(true);
    }
    async function verifyToken() {
      await api
        .get("auth/verifyToken", {
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        })
        .then((response) => {
          setUser(response.data.data);
        })
        .catch((response) => {
          setIsNav(true);
        });
    }
    verifyToken();
  }, [isNav]);

  function updateFile(id, data, list) {
    const uploadedFile = list.map((uploadedFile) => {
      return id === uploadedFile.id
        ? { ...uploadedFile, ...data }
        : uploadedFile;
    });
    setUploadsFile(uploadedFile);
  }

  async function processUpload(uploadedFile, list) {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);
    await api
      .post("posts", data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));
          updateFile(
            uploadedFile.id,
            {
              progress,
            },
            list
          );
        },
      })
      .then((response) => {
        updateFile(
          uploadedFile.id,
          {
            uploaded: true,
            id: response.data._id,
            url: response.data.url,
          },
          list
        );
      })
      .catch(() => {
        updateFile(
          uploadedFile.id,
          {
            error: true,
          },
          list
        );
      });
  }

  async function handleDelete(id) {
    await api.delete(`posts/${id}`);
    const uploadedFile = uploadedFiles.filter((file) => file.id !== id);
    setUploadsFile(uploadedFile);
  }

  return (
    <>
      <Container>
        <Header email={user.email} />
        <ListUsers />
        <Upload onUpload={handleUpload} />
        {!!uploadedFiles.length && (
          <FileList files={uploadedFiles} onDelete={handleDelete} />
        )}
      </Container>
      {isNav ? <Redirect to="/" /> : null}
    </>
  );
}
