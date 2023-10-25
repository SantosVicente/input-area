import { useState } from "react";
import InputArea from "./components/@ui/InputArea";

const App: React.FC = () => {
  const [csvData, setCsvData] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <InputArea csvData={csvData} setCsvData={setCsvData} />
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
    </div>
  );
};

export default App;
