import { AppLayout } from '../components/layout/nav/applayout/applayout'
import { ImportPdf } from '../components/business/ImportPdf/importPdf'
import { PdfList } from '../components/business/pdfList/pdfList'
import { ProvideManageDiapo } from '../utils/hooks'

export const ManagePdf = () => {
  return (
    <ProvideManageDiapo>
      <AppLayout
        component={
          <>
            <ImportPdf />
            <PdfList />
          </>
        }
      />
    </ProvideManageDiapo>
  )
}
