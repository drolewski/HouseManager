import {useState} from "react";

type TextFieldProps = {
    label?: string;
    showError?: boolean;
    errorMessage?: string;
    onValueChange: (v: string) => void;
};
const TextField = ({label, showError, errorMessage, onValueChange}: TextFieldProps) => {
    const [value, setValue] = useState<string>();
    const [error, isError] = useState<boolean>();
    const onChange = (v: string) => {
        setValue(v);
        onValueChange(v);
        isError(v.length === 0);
    }

    return (
        <div className="w-1/2 flex flex-col mb-2">
            <div>{label}</div>
            <input type="text"
                   className="h-8 w-full rounded border border-zinc-400 focus:border-zinc-900 bg-stone-100"
                   autoFocus
                   onChange={(change) => onChange(change.target.value)}
                   onBlur={() => isError(false)}
                   value={value ?? ''}
            />
            <div className="h-3">{(error || showError) && errorMessage}</div>
        </div>
    );
}

export default TextField;