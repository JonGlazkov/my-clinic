import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import ConsultsTableFilter from './consults-table-filter'
import ConsultsTableRow from './consults-table-row'

export function Consults() {
  return (
    <>
      <Helmet title="Consultas" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Consultas</h1>
        <div className="space-y-5">
          <ConsultsTableFilter />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  {/* <TableHead className="w-[180px]">Realizado em</TableHead> */}
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Data da consulta</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>{'Médico(a)'}</TableHead>
                  <TableHead className="w-[140px]">Valor</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <ConsultsTableRow key={index} />
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
