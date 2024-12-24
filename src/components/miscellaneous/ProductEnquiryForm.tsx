"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form validation schema
const formSchema = z.object({
  Name_First: z.string().min(1, { message: "First name is required." }),
  Name_Last: z.string().min(1, { message: "Last name is required." }),
  Email: z.string().email({ message: "Invalid email address." }),
  PhoneNumber_countrycode: z
    .string()
    .min(10, { message: "Phone number is invalid." }),
  Dropdown1: z.string().min(1, { message: "Please select a city." }),
});

export function ProductEnquiryForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name_First: "",
      Name_Last: "",
      Email: "",
      PhoneNumber_countrycode: "",
      Dropdown1: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Log the form data for debugging
    console.log(data);

    // Submit the form to Zoho (no manual API call needed, form submits automatically)
    const formActionUrl = "https://forms.zohopublic.in/himanshu03213040gm1/form/ProductEnquiry/formperma/Bg3a8CJSTa-i-suKuTUfBBN39DoEK2c-5DoipVJLqeQ/htmlRecords/submit";

    // Create a form element programmatically for submission
    const formElement = document.createElement('form');
    formElement.action = formActionUrl;
    formElement.method = 'POST';
    formElement.acceptCharset = 'UTF-8';
    formElement.enctype = 'multipart/form-data';

    Object.keys(data).forEach((key) => {
      const inputElement = document.createElement('input');
      inputElement.type = 'hidden';
      inputElement.name = key;
      inputElement.value = data[key as keyof typeof data]; // Type assertion here
      formElement.appendChild(inputElement);
    });

    // Append the form to the body and submit it
    document.body.appendChild(formElement);
    formElement.submit();

    // Show success alert
    alert("Your enquiry has been submitted successfully!");

    // Clear the form fields
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)} // Form data will be submitted to Zoho
          className="space-y-4"
        >
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />

          {/* First Name */}
          <FormField
            control={form.control}
            name="Name_First"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input id="Name_First" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="Name_Last"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input id="Name_Last" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Email</FormLabel>
                <FormControl>
                  <Input id="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="PhoneNumber_countrycode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    id="PhoneNumber_countrycode"
                    placeholder="Phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Dropdown */}
          <FormField
            control={form.control}
            name="Dropdown1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="-Select-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="-Select-">-Select-</SelectItem>
                      <SelectItem value="New Delhi">New Delhi</SelectItem>
                      <SelectItem value="Noida">Noida</SelectItem>
                      <SelectItem value="Gurgoan">Gurgoan</SelectItem>
                      <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                      <SelectItem value="Chennai">Chennai</SelectItem>
                      <SelectItem value="Kolkata">Kolkata</SelectItem>
                      <SelectItem value="Bangalore">Bangalore</SelectItem>
                      <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="Surat">Surat</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
