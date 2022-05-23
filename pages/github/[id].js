import Layout from '../../components/layout'
import Head from 'next/head'

export default function GithubPage({ data }) {
  return (
    <Layout>
      {JSON.stringify(data)}
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/repos/rtfpessoa/diff2html/pulls/${params.id}`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }