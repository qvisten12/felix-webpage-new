import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { content } from '../../content/content'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { getAllProjectIds } from '../../lib/projects'

interface data {
  title: string
  featuredImg: string
  info: string
  subTitle: string
  link: string
  codelink: string
}

interface project {
  index: number
  slug: number
  data: data
}

interface Props {
  projects: any
}

const Post = ({ projects }: Props) => {
  const route = useRouter()
  const { pid } = route.query

  const [project, setProject] = useState<project>({
    index: 0,
    slug: 0,
    data: {
      title: '',
      subTitle: '',
      featuredImg: '',
      info: '',
      link: '',
      codelink: '',
    },
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const parsedProjects = JSON.parse(projects)
    const filteredProjects = parsedProjects.filter((project: project) => project.slug === Number(pid))
    setProject(filteredProjects[0])
    setLoading(false)
  }, [])

  return (
    <div>
      <Head>
        <title>Felix Ljungqvist - {project.data.title}</title>
      </Head>
      {loading ? (
        'loading...'
      ) : (
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex flex-col w-half justify-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">{project.data.title}</h1>
            <h2 className="text-xl md:text-2xl text-gray-500 tracking-wider">{project.data.subTitle}</h2>

            <div className="flex flex-col md:flex-row w-full justify-between mt-14 mb-10">
              <div className="flex flex-col w-full md:w-3/4 max-w-2xl mb-10 md:mb-0">
                <p className="text-xl font-medium text-gray-600">{project.data.info}</p>
                <div className="mt-14 flex justify-between">
                  <a
                    href={project.data.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 font-bold text-xl cursor-pointer
                hover:text-blue-300 w-38"
                  >
                    Visit website <BsArrowRight size={24} className="inline-block" />
                  </a>
                  {project.data.codelink ? (
                    <a
                      href={project.data.codelink}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-blue-500 font-bold text-xl cursor-pointer
                hover:text-blue-300 w-24"
                    >
                      Code <BsArrowRight size={24} className="inline-block hover:" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="w-half">
            <div className="w-full">
              <div>
                <Image src={project.data.featuredImg} alt={project.data.title} priority width={650} height={380} className="rounded-md" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: string[] = getAllProjectIds()

  const paths = slugs.map((slug) => ({
    params: { pid: slug.toString() || '404' },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = JSON.stringify(content.projects)

  return {
    props: {
      projects,
    },
  }
}

export default Post
