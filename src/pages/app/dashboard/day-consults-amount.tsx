import { Activity } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DayConsultsAmountCard() {
  return (
    <Card className="bg-background">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Consultas (dia)
        </CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">16</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400"> -4%</span> em
          relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}
