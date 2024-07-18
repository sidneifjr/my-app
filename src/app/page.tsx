import { getItems } from '@/api/getItems'
import { Dashboard } from '@/components/dashboard'
import { ModalForm } from '@/components/modal/modal-form'
import { H2 } from '@/components/typography/h2'
import { Paragraph } from '@/components/typography/paragraph'

export default async function Home() {
  const data = await getItems()

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <H2 className="text-slate-800">Visão Geral</H2>

          <Paragraph className="text-slate-600">
            Confira os dados mais importantes dos assegurados cadastrados.
          </Paragraph>
        </div>

        <ModalForm />
      </div>

      <Dashboard data={data} />
    </div>
  )
}
