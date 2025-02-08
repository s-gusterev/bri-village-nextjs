import Breadcrumbs from '@/widgets/breadcrumbs';
import ServiceSection from '@/widgets/service-section';

const ServicesPage = () => {
  return (
    <div className="container">
      <Breadcrumbs customTitles={{ services: 'Услуги и акции' }} />
      <ServiceSection />
    </div>
  );
};

export default ServicesPage;
