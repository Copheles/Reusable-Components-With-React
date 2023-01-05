import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {

  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false);
  }

  const handleClick = () => {
    setShowModal(true);
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary >I accept</Button>
    </div>
  )

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Here is an import agreement for you to accept
      </p>

    </Modal>
  )

  return (
    <div className='relative'>
      <Button primary onClick={handleClick} >Open modal</Button>
      {showModal && modal}
      <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p>
      <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p>
      <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p>
      <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p>
      <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p>
      <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p>
      <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p>
      <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p>
      <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p> <p>
      Morbi id hendrerit ipsum. Aenean porta elit a fermentum mattis. Nulla a congue diam, in rhoncus arcu. Vivamus urna lorem, malesuada sed semper et, commodo et turpis. Maecenas tincidunt tincidunt nibh in viverra. Phasellus lobortis at mauris vitae euismod. Aliquam erat volutpat. Curabitur at vulputate ante. Etiam a mauris at elit blandit dapibus.
      </p>
    </div>
  )
}

export default ModalPage