"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LucideArrowRightCircle } from "lucide-react";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { data } from "@/data/services";
import { f } from "@/lib/fetch";
import { pathsWihtoutPrefix } from "@/services";
import { schema } from "@/validators/contact";

import { Button } from "../ui/button";
import { DateInput } from "../ui/date-input";
import { FormInput } from "../ui/form-input";
import { SelectInput } from "../ui/select-input";

export type TInquiryFormValues = z.infer<typeof schema>;

type TProps = {
  selected_service?: number;
};

export default function ContactForm({ selected_service }: TProps) {
  const [isLoading, setIsLoading] = useState(false);
  const selectedService = data.list?.find(
    (item) => item.id === selected_service
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<TInquiryFormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      service_type: selected_service?.toString(),
    },
  });

  const onSubmit: SubmitHandler<TInquiryFormValues> = async (d) => {
    setIsLoading(true);
    await f({
      url: pathsWihtoutPrefix.CONTACT_FORM,
      method: "POST",
      body: d,
      success:
        "Your message has been sent successfully! We'll get back to you soon.",
      error: "Something went wrong!",
    });
    setIsLoading(false);
    reset();
  };

  useEffect(() => {
    if (selected_service) setValue("service_type", selected_service.toString());
  }, [selected_service, setValue]);

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

      {selectedService?.type === "service" && (
        <div className="space-y-4 p-4 bg-green-50/50 rounded-lg border border-green-100">
          <h4 className="font-semibold text-gray-900 text-sm">
            Service Details
          </h4>

          <FormInput
            name="pickup_address"
            label="Pickup Address"
            type="text"
            className="w-full border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-lg"
            placeholder="Eg: 123, Some street, Some city, Some country - 123456"
            register={register("pickup_address")}
            error={errors.pickup_address?.message}
          />

          <FormInput
            name="drop_address"
            label="Drop Address"
            type="text"
            className="w-full border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-lg"
            placeholder="Eg: 123, Some street, Some city, Some country - 123456"
            register={register("drop_address")}
            error={errors.drop_address?.message}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              name="floor"
              label="Floor"
              type="text"
              className="w-full border-gray-200 focus:border-green-500 focus:ring-green-500/20 rounded-lg"
              placeholder="Eg: 1st floor, 2nd floor, etc."
              register={register("floor")}
              error={errors.floor?.message}
            />

            <div className="w-full">
              <DateInput
                name="pickup_date"
                label="Pickup Date"
                onChange={(date) => setValue("pickup_date", date)}
              />
            </div>
          </div>

          <SelectInput
            disabled={!!selected_service}
            name="service_type"
            placeholder="Select a service type..."
            label="Service"
            data={
              data.list?.map((service) => ({
                id: service.id.toString(),
                name: service.title,
                def: service.id === selected_service,
              })) || []
            }
            get="name"
            stateChange={(value) => setValue("service_type", value)}
          />

          <SelectInput
            name="driveway_status"
            placeholder="Select a driveway status..."
            label="Are there stairs or steep driveways at any locations?"
            data={[
              { id: "yes", name: "Yes" },
              { id: "no", name: "No" },
            ]}
            get="name"
            stateChange={(value) => setValue("driveway_status", value)}
          />
        </div>
      )}

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
