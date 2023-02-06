import NoteContext from "./NoteContext";

const NoteState= (props)=>{
    const state={
        "name":"kartik",
        "college":"dtu"
    };
    return (
        <NoteContext.Provider value={state}>
            {props.children};
        </NoteContext.Provider>
    )
}

export default NoteState;