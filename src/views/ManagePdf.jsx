import { AppLayout } from '../components/layout/nav/applayout/applayout'
import { ImportPdf } from '../components/business/ImportPdf/importPdf'
import { PdfList } from '../components/business/pdfList/pdfList'

export const ManagePdf = () => {
  return (
    <AppLayout
      component={
        <>
          <ImportPdf />
          <PdfList />
        </>
      }
    />
  )
}
