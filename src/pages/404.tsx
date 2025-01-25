import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        {' '}
        Voltar para o{' '}
        <Link to="/" className="dark:sky-400 text-sky-500">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
