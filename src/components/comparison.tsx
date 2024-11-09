import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComparisonItem {
  feature: string;
  phantom: boolean;
  others: boolean;
}

interface ComparisonProps {
  items: ComparisonItem[];
}

export function Comparison({ items }: ComparisonProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Phantom Starter vs Others
        </h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Feature</TableHead>
                <TableHead className="text-center">Phantom Starter</TableHead>
                <TableHead className="text-center">Other Solutions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">
                    {item.phantom ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.others ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
