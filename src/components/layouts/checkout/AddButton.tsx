import { Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface AddButtonProps {
  title: string;
  onClick: Dispatch<SetStateAction<boolean>>;
}
const AddButton = ({ title, onClick }: AddButtonProps) => {
  return (
    <button
      onClick={() => {
        onClick(true);
      }}
      className="cursor-pointer mt-5 w-full p-4 rounded-xl border-2 border-dashed border_main hover:border-primary/50 transition-colors duration-200 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary group mb-8"
    >
      <Plus className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
      <span className="font-medium">{title}</span>
    </button>
  );
};

export default AddButton;
