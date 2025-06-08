import ButtonIcon from "../../shared/components/button/button.components";

export default function NavComponent () 
{
    return (
        <nav>
            <div className="flex bg-gray-300/10 p-3 border-rounded-3">
                <ButtonIcon icon='menu' disabled={false} onClick={console.log} />
            </div>
        </nav>
    );
}
