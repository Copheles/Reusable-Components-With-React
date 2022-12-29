
import Accordion from "../components/Accordion";

const AccordionPage = () => {

  const items = [
    {
      id:'214wqg',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want.'
    },
    {
      id: 'i23opo1',
      label: 'Can I use Javascript on a project?',
      content: 'You can use React on any project you want.'
    },
    {
      id: 'lo31o41',
      label: 'Can I use Css on a project?',
      content: 'You can use React on any project you want.'
    },
  ]

  return(
    <Accordion items={items} />
  )
};

export default AccordionPage;
