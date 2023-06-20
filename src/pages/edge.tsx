import Flow from "components/Flow";
import { NextPage } from "next";
import { ReactFlowProvider } from "reactflow";

const Edge: NextPage = () => {
  return (
    <div className='h-screen flex flex-col'>
      <header className='flex border-solid border-2 border-sky-500 p-2'>Drag the edge - example </header>
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
};

export default Edge;