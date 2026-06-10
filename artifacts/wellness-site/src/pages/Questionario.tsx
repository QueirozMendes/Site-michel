import { PageWrapper } from "@/components/layout/PageWrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  projectType: z.enum(["residencial", "hotel", "comercial", "outro"]),
  spaceType: z.string().min(5, "Descreva brevemente o espaço desejado"),
  budget: z.string().min(1, "Campo obrigatório"),
  timeline: z.string().min(1, "Campo obrigatório"),
  details: z.string().optional()
});

export default function Questionario() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "residencial",
      spaceType: "",
      budget: "",
      timeline: "",
      details: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Aplicação Recebida.",
      description: "Nossa equipe de curadoria analisará seu projeto e entrará em contato em breve.",
    });
    form.reset();
  };

  return (
    <PageWrapper>
      <div className="pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif mb-6">Inquérito de Projeto</h1>
              <p className="text-muted-foreground font-light leading-relaxed">
                Nossa capacidade de atendimento é estritamente limitada para garantir a excelência absoluta em cada detalhe. 
                Por favor, detalhe sua visão abaixo.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-card border border-border p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-mono text-muted-foreground">Nome do Cliente / Escritório</FormLabel>
                          <FormControl>
                            <Input className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" {...field} />
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
                          <FormLabel className="uppercase tracking-widest text-xs font-mono text-muted-foreground">E-mail Executivo</FormLabel>
                          <FormControl>
                            <Input type="email" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel className="uppercase tracking-widest text-xs font-mono text-muted-foreground">Natureza do Empreendimento</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col md:flex-row gap-6 mt-4"
                          >
                            {["residencial", "hotel", "comercial"].map((type) => (
                              <FormItem key={type} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={type} />
                                </FormControl>
                                <FormLabel className="font-light capitalize cursor-pointer">
                                  {type}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="spaceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs font-mono text-muted-foreground">Escopo do Espaço (Ex: Gym Privado, Andar de Wellness)</FormLabel>
                        <FormControl>
                          <Input className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-mono text-muted-foreground">Expectativa de Investimento</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: $500k - $1M+" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-mono text-muted-foreground">Prazo de Execução</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Q4 2025" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs font-mono text-muted-foreground">Notas Adicionais / Atmosfera Desejada</FormLabel>
                        <FormControl>
                          <Textarea 
                            className="resize-none border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-8">
                    <Button type="submit" className="w-full md:w-auto px-12 py-6 rounded-none tracking-widest uppercase text-xs font-mono">
                      Submeter Inquérito
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
}
