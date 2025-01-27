import { ArrowRight, Search, X } from 'lucide-react'

import { ConsultStatus } from '@/components/consult-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import ConsultsDetails from './consults-details'

export interface ConsultsTableRowProps {
  consult: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}

export default function ConsultsTableRow({ consult }: ConsultsTableRowProps) {
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

          <ConsultsDetails consult={consult} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {consult.orderId}
      </TableCell>
      {/* <TableCell className="text-muted-foreground">
                    há 15 minutos
                  </TableCell> */}
      <TableCell>
        <ConsultStatus status={consult.status} />
      </TableCell>
      <TableCell className="text-muted-foreground">12/08/2025</TableCell>
      <TableCell className="font-medium">{consult.customerName}</TableCell>
      <TableCell className="font-medium">Dr Arnóbio Pacheco</TableCell>
      <TableCell className="font-medium text-primary">
        {consult.total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
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
