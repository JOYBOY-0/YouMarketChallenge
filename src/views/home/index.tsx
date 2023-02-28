import Layout from '../../layout'
import { ActionsSection } from './components/actionsSection'
import { HeroCard } from './components/card'
import { LastMovements } from './components/lastMovements'
import './styles.css'

export const Home = () => {
  return (
    <Layout title='¡Hola test!'>
      <div 
      className='flex flex-col items-center flex-1 py-4 px-2'>
        <HeroCard />
        <ActionsSection />
        <LastMovements />
      </div>
    </Layout>
  )
}
