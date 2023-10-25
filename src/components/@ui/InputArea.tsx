import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface InputAreaProps {
  csvData: string | null;
  setCsvData: React.Dispatch<React.SetStateAction<string | null>>;
}

const InputArea = ({ csvData, setCsvData }: InputAreaProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        setCsvData(result);
      };

      reader.readAsText(file);
    },
    [setCsvData]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <>
      {!csvData ? (
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #ccc",
            borderRadius: "4px",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            width: "20rem",
          }}
        >
          <input {...getInputProps()} accept=".csv" />
          <p>
            Arraste e solte um arquivo CSV aqui ou clique para selecionar um
            arquivo
          </p>
        </div>
      ) : (
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed rgba(0, 255, 0, 0.5)",
            borderRadius: "4px",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            width: "20rem",
          }}
        >
          <input {...getInputProps()} accept=".csv" disabled />
          <p>Arquivo CSV carregado com sucesso!</p>
        </div>
      )}
      {/*csvData && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "#f5f5f5",
            color: "#333",
          }}
        >
          <h2>Conteúdo do CSV:</h2>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            {csvData}
          </pre>
        </div>
          )*/}
    </>
  );
};

export default InputArea;
