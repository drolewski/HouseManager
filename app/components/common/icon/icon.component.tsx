type IconProps = {
    icon: string;
    description: string;
    className: string;
};

const Icon = (props: IconProps) => {
    return (
        <img className={props.className} src={"../icons/" + props.icon + ".svg"} alt={props.description}/>
    );
}

export default Icon;