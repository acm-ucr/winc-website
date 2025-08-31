interface TitleProps {
    title : string
}

const Title = ({title}: TitleProps) => {
    return(
        <div className = "flex flex-col w-1/6 items-center font-bold text-4xl">
            {title}
            <div className = "mt-3 h-2 w-4/5 bg-winc-red-700"/>
            <div className = "h-2 w-2/3 bg-winc-red-200"/>
        </div>
    );
}

export default Title;