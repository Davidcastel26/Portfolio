export default{
  name:'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields:[
    {
      name:'name',
      title:'Name',
      type: 'string'
    },
    {
      name:'company',
      title:'Company',
      type: 'string'
    },
    {
      name:'imagesurl',
      title:'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name:'feedback',
      title:'Feedback',
      type: 'string'
    },
    {
      name:'github',
      title:'GitHub',
      type: 'string'
    },
    {
      name:'linkedin',
      title:'Linkedin',
      type: 'string'
    }
  ]
}