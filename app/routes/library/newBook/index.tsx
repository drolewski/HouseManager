import TextField from "~/components/common/textField/textField.component";
import {useState} from "react";

const NewBook = () => {
    const [value, setValue] = useState<string>();
    const [error, isError] = useState<boolean>();

    const handleTextFieldValue = (v: string) => {
        setValue(v);
        isError(false);
    }
    const onAdd = () => {
        // call google api
        if (!value || value?.length === 0) {
            isError(true);
            return;
        }
    };

    return (
        <div className="flex flex-col items-center w-1/2 h-1/2 rounded-md">
            <TextField label="ISBN"
                       errorMessage={'Enter ISBN'}
                       showError={error}
                       onValueChange={(v) => handleTextFieldValue(v)}></TextField>
            <button className="w-1/2 h-8 m-2 mt-15 bg-zinc-800 hover:bg-zinc-500 text-stone-100 rounded"
                    onClick={() => onAdd()}>Add
            </button>
        </div>
    );
}

export default NewBook;