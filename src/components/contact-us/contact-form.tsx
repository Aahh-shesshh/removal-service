"use client";
import { pathsWihtoutPrefix } from "@/services";
import {  contactSchema } from "@/validators/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideArrowRightCircle } from "lucide-react";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { z } from "zod";
import { Button } from "../ui/button";
import { FormInput } from "../ui/form-input";

export type TInquiryFormValues = z.infer<typeof contactSchema>;



export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TInquiryFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<TInquiryFormValues> = async (formData) => {
    setIsLoading(true);
    try {
      const res = await fetch(pathsWihtoutPrefix.CONTACT_FORM, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        toast.error("Failed to send message");
        return;
      }

      reset();
      toast.success("Message sent successfully");
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false); // always runs
    }
  };

  return (
    <form
      className="sticky top-24 h-fit w-full space-y-6 rounded-xl bg-[#dcfce7] shadow-xl border border-gray-100 p-6 md:p-8 backdrop-blur-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Form Header */}
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Get Your Free Quote
        </h3>
        <p className="text-sm text-gray-600">
          Fill out the form below and we'll get back to you with a customized
          quote
        </p>
      </div>

      <div>
        <FormInput
          name="full_name"
          label="Full Name"
          placeholder="Eg: John Doe"
          type="text"
          required
          className="w-full border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-lg"
          register={register("full_name")}
          error={errors.full_name?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          name="email"
          label="Email"
          type="email"
          required
          containerClassName="w-full"
          className="border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-lg"
          placeholder="Eg: johndoe@gmail.com"
          register={register("email")}
          error={errors.email?.message}
        />
        <FormInput
          name="phone_number"
          label="Phone Number"
          type="number"
          containerClassName="w-full"
          className="border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-lg"
          placeholder="Eg: 1234567890"
          register={register("phone_number")}
          error={errors.phone_number?.message}
        />
      </div>



      <FormInput
        name="message"
        label="Message"
        type="textarea"
        required
        className="w-full border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-lg min-h-[120px]"
        register={register("message")}
        placeholder="Tell us more about your moving requirements..."
        error={errors.message?.message}
      />

      <div className="pt-4 border-t border-gray-100">
        <Button
          size="lg"
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-3"></div>
              Sending...
            </>
          ) : (
            <>
              Get Your Free Quote
              <LucideArrowRightCircle className="ml-3 -rotate-45" size={18} />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
