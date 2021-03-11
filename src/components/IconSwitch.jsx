export function IconSwitch(props) {
    const {icon, onSwitch} = props;

    return (
        <button className="material-icons" onClick={() => {onSwitch()}}>
            {icon}
        </button>
    )
}