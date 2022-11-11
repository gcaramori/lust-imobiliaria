import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex, Button, Text } from '@chakra-ui/react';

const content = (
    <Flex py={4}>
      
    </Flex>
  );
  
  const steps = [
    { label: 'Escolha uma data', content },
    { label: 'Preencha o formulário', content }
  ];

  const Schedule = () => {
    const { nextStep, activeStep } = useSteps({
      initialStep: 0,
    });

    const handleSchedule = () => {
      nextStep();
    }
  
    return (
      <Flex flexDir="column" width="100%">
        <Steps activeStep={activeStep}>
          {steps.map(({ label, content }) => (
            <Step fontFamily='Poppins, sans-serif' label={label} key={label}>
              {content}
            </Step>
          ))}
        </Steps>
        <Flex width="100%" justify="flex-end">
            <Button size="sm" onClick={handleSchedule}>
              {activeStep === steps.length - 1 ? 'Pronto!' : 'Próximo'}
            </Button>
          </Flex>
      </Flex>
    );
};

export default Schedule;