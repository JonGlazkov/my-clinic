import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import ConsultsDetails from './consults-details'

export default function ConsultsTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes da consulta</span>
            </Button>
          </DialogTrigger>

          <ConsultsDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        a98fg97adts78a6sd8asd
      </TableCell>
      {/* <TableCell className="text-muted-foreground">
                    há 15 minutos
                  </TableCell> */}
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground">12/08/2025</TableCell>
      <TableCell className="font-medium">
        Jonathan Ventura Macedo da Silva
      </TableCell>
      <TableCell className="font-medium">Dr Arnóbio Pacheco</TableCell>
      <TableCell className="font-medium text-primary">R$ 459,90</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-1 h-3 w-3" />
          Confirmar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-1 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
