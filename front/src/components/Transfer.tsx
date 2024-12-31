/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export function Transfer() {
  const [tx, setTx] = React.useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      from: "0x125f85D02912c62E7E63FFdc12F1f4511B14c3DC",
      to: "0x9C59b2f21B77C11EF9b9EC3195df199980fe6f15",
      amount: 1,
    }
  });
  const onSubmit = async (data: any) => {
    setLoading(true);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner(data.from);
    const t = await signer.sendTransaction({
      to: data.to,
      value: ethers.parseEther(data.amount.toString())
    });
    const tx = await t.wait();
    setTx({tx, t, data});
    setLoading(false);
  }

  return <div className="space-y-4 mt-3 ml-5">
      <h1 className="text-xl font-bold">Transfer</h1>
      <p>Transfer your money here</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="from"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cuenta de origen</FormLabel>
                <FormControl>
                  <Input placeholder="0x3d88345" {...field} />
                </FormControl>
                <FormDescription>

                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="to"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cuenta de destino</FormLabel>
                <FormControl>
                  <Input placeholder="0x3d88345" {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input placeholder="0x3d88345" {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            <Loader2 size={16} className={loading ? "animate-spin" : "hidden"} />
            Transfer
          </Button>
        </form>
      </Form>
      {
        tx && (
          <div>
            <h2>Transacción realizada</h2>
            <pre>{JSON.stringify(tx, null, 4)}</pre>
          </div>
        )
      }
    </div>
}