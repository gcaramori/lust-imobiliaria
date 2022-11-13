import React, { useState } from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex, Button, Text } from '@chakra-ui/react';
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import ScheduleForm from './ScheduleForm';

registerLocale('pt-BR', ptBR);

const Schedule = ({ handleCloseModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { nextStep, activeStep } = useSteps({
    initialStep: 0
  });

  const handleSchedule = () => {
    nextStep();
  }

  return (
    <Flex flexDir="column" width="100%" color='#000'>
      <Steps activeStep={activeStep}>
        <Step className='scheduleStep' fontFamily='Poppins, sans-serif' label='Escolha uma data' key='Escolha uma data'>
          <Flex flexDir='column' justifyContent='flex-start' alignItems='center' h='300px' py={10} w='100%'>
            <Text fontSize={{ base: 15, lg: 18 }} textAlign='left' mb={6} fontWeight='600'>Escolha uma data para a visita</Text>
            <DatePicker locale='pt-BR' selected={startDate} dateFormat="dd/MM/yyyy" onChange={(date) => setStartDate(date)} />
          </Flex>
        </Step>
        <Step className='scheduleStep' fontFamily='Poppins, sans-serif' label='Preencha o formulário' key='Preencha o formulário'>
          <Flex id="scheduleFormContainer" justifyContent='center' alignItems='flex-start' h='300px' py={10} w='100%'>
            <ScheduleForm handleCloseModal={handleCloseModal} />
          </Flex>
        </Step>
      </Steps>
      {activeStep === 1  ? (
        ''
      ) : (
        <Flex width="100%" justify="flex-end">
            <Button size="sm" bg='#000' color='#fff' onClick={handleSchedule} _hover={{ bg: '#000', opacity: .8 }}>Próximo</Button>
        </Flex>
      )}
      </Flex>
  );
};

export default Schedule;