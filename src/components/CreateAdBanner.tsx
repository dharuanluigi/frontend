import { MagnifyingGlassPlus } from "phosphor-react";

import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
    <div className="bg-duo-gradient pt-1 self-stretch rounded-lg overflow-hidden mt-8">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="bg-violet-500 py-3 px-4 text-white hover:bg-violet-600 rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
