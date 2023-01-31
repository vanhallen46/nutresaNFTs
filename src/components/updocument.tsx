import React from "react";
import { Button, FileUploader, Flex, TextField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { send } from "process";

const UploadDocument = () => {
  return (
    <Flex direction={"column"} alignItems={"center"}>
      <TextField
        label="Autor"
        defaultValue=""
        width={320}
        height={70}
        fontWeight={700}
      />
      <TextField
        width={320}
        height={70}
        defaultValue=""
        label="Creador"
        fontWeight={700}
      />
      <TextField
        label="Fecha de Inicio"
        fontWeight={700}
        defaultValue=""
        width={320}
        height={70}
        type="date"
      />
      <TextField
        label="Fecha de Finalización"
        defaultValue=""
        width={320}
        height={70}
        type="date"
        fontWeight={700}
      />
      <TextField
        label="Nombre del Evento"
        defaultValue=""
        width={320}
        height={70}
        fontWeight={700}
      />
      <TextField
        label="Token Standard"
        width={320}
        height={70}
        fontWeight={700}
      />
      <FileUploader
        acceptedFileTypes={[".xlsx", ".xls", ".csv"]}
        accessLevel="public"
      />

      <Button
        loadingText=""
        onClick={() => send}
        ariaLabel=""
        backgroundColor="#0DA54B"
        color="white"
        width={120}
        marginBottom={30}
      >
        Enviar
      </Button>
    </Flex>
  );
};

export default UploadDocument;
