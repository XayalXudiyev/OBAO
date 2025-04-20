import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"
interface SubmitModalProps {
  isOpen: boolean
  onClose: () => void
  t: any
}

const SubmitModal: React.FC<SubmitModalProps> = ({ isOpen, onClose, t }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[450px] h-[300px] sm:rounded-none p-0  shadow-md gap-0">
        <DialogHeader className="flex flex-col justify-center bg-[#ECE0CF] p-0">
          <DialogTitle className="flex flex-col justify-cente items-center gap-8">
            <Image
              src={"/success.svg"}
              alt="success"
              width={30}
              height={30}
              loading="lazy"
            />
            <p className="font-proximanova3 text-sm tracking-wide text-center  w-[380px]">
              {t("Success")}
            </p>
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center">
          <Button
            onClick={onClose}
            className="bg-black  hover:bg-black/80  text-white w-fit mx-auto rounded-none "
          >
            Ok
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SubmitModal
