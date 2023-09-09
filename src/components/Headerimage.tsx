function getBackgroundImageClass(page: string): string {
    switch (page) {
      case 'about':
        return 'background-about';
      case 'services':
        return 'background-services';
      case 'contact':
        return 'background-contact';
      default:
        return 'background-default'; // Default class if no specific condition is met
    }
  }

export default function HeaderImage({ heading, page }: { heading: string, page: string }) {
   
    const backgroundImageClass = getBackgroundImageClass(page);
    return (
        <div class={`header-image ${backgroundImageClass}`}>
          <h1 class="fade-in">{heading}</h1>
        </div>
      );
    }