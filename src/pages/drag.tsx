import DragAndDrop from "components/Drag";
import { NextPage } from "next";
import { ReactFlowProvider } from "reactflow";

const Drag: NextPage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <header className='flex border-solid border-2 border-sky-500 p-2'>Drag the edge - example </header>
            <ReactFlowProvider>
                <Sidebar />
                <DragAndDrop />
            </ReactFlowProvider>
        </div>
    )
}

export default Drag;


type Node = 'default' | 'input' | 'output' 

const Sidebar = () => {
    const onDragStart = (event: any, nodeType: Node) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="mt-16 ml-16 mr-16 p-4 flex gap-4 justify-center items-center shadow-md bg-slate-100">
            <div className=''>You can drag these nodes to the pane on the right.</div>
            <div className="p-2 border-blue-400 border-4 border-solid" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                Input Node
            </div>
            <div className="p-2 border-black border-4 border-solid" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Default Node
            </div>
            <div className="p-2 border-red-400 border-4 border-solidt" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div>
        </aside>
    );
};
