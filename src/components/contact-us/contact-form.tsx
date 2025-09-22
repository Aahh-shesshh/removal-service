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
      className="sticky top-4 h-fit w-full space-y-4 rounded-md bg-yellow-500/10 p-4 md:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        name="full_name"
        label="Full Name"
        placeholder="Eg: John Doe"
        type="text"
        required
        className="w-full"
        register={register("full_name")}
        error={errors.full_name?.message}
      />
      <div className="flex items-center gap-4">
        <FormInput
          name="email"
          label="Email"
          type="email"
          required
          containerClassName="w-full"
          placeholder="Eg: johndoe@gmail.com"
          register={register("email")}
          error={errors.email?.message}
        />
        <FormInput
          name="phone_number"
          label="Phone Number"
          type="number"
          containerClassName="w-full"
          placeholder="Eg: 1234567890"
          register={register("phone_number")}
          error={errors.phone_number?.message}
        />
      </div>
      {selectedService?.type === "service" && (
        <>
          <FormInput
            name="pickup_address"
            label="Pickup Address"
            type="text"
            className="w-full"
            placeholder="Eg: 123, Some street, Some city, Some country - 123456"
            register={register("pickup_address")}
            error={errors.phone_number?.message}
          />
          <FormInput
            name="drop_address"
            label="Drop Address"
            type="text"
            className="w-full"
            placeholder="Eg: 123, Some street, Some city, Some country - 123456"
            register={register("drop_address")}
            error={errors.phone_number?.message}
          />
          <FormInput
            name="floor"
            label="Floor"
            type="text"
            className="w-full"
            placeholder="Eg: 1st floor, 2nd floor, etc."
            register={register("floor")}
            error={errors.phone_number?.message}
          />
          <DateInput
            name="pickup_date"
            label="Pickup Date"
            onChange={(date) => setValue("pickup_date", date)}
          />
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
        </>
      )}
      <FormInput
        name="message"
        label="Message"
        type="textarea"
        required
        className="w-full"
        register={register("message")}
        placeholder="Eg: Some message here..."
        error={errors.message?.message}
      />

      {selectedService?.type === "service" && (
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
      )}
      <div className="flex justify-end">
        <Button size="lg" type="submit">
          {isLoading ? "Sending..." : "Send"}
          <LucideArrowRightCircle className="ml-3 -rotate-45" size={18} />
        </Button>
      </div>
    </form>
  );
}
