import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  {...field} 
                  className="shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] border-none bg-gray-50 focus:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#fff] transition-shadow"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="your@email.com" 
                  type="email" 
                  {...field} 
                  className="shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] border-none bg-gray-50 focus:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#fff] transition-shadow"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="min-h-[150px] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#fff] border-none bg-gray-50 focus:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#fff] transition-shadow"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full bg-primary shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2)] transition-shadow"
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
};