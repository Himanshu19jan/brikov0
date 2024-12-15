import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductEnquiryForm } from "../miscellaneous/ProductEnquiryForm";

const ContactModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-4 font-medium rounded px-4 py-3 text-white bg-primary-main">
          Get a Call Back
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-full md:h-fit overflow-y-scroll">
        <DialogHeader className="md:px-4">
          <DialogTitle className="font-graphik text-center">
            <h4 className="font-graphik text-4xl mb-4 text-center font-bold">
              BRIKO
            </h4>
            Get in touch with us. We're here to assist you.
          </DialogTitle>
        </DialogHeader>
        <ProductEnquiryForm />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
