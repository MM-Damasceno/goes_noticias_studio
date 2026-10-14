import {defineField, defineType} from 'sanity'

export const noticia = defineType({
  name: 'noticia',
  title: 'Notícia',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Endereço da notícia (clique em Generate)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Resumo (aparece na home)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'pubDate',
      title: 'Data de publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Notícias', value: 'noticia'},
          {title: 'Eventos', value: 'evento'},
          {title: 'Informativos', value: 'informativo'},
          {title: 'Projeto dos Alunos', value: 'projeto'},
        ],
      },
      initialValue: 'noticia',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem de capa (opcional)',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Descrição da imagem'}],
    }),
    defineField({
      name: 'body',
      title: 'Texto',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'heroImage'},
  },
})