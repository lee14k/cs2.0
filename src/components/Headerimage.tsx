function getBackgroundImageClass(page: string): string {
    switch (page) {
      case 'about':
        return 'background-about fade-in';
      case 'services':
        return 'background-services fade-in';
      case 'contact':
        return 'background-contact fade-in';
        case 'Expertise':
        return 'background-expertise fade-in';
        case 'Neutrals':
          return 'background-neutrals fade-in';
      default:
        return 'background-default fade-in'; // Default class if no specific condition is met
    }
  }

export default function HeaderImage({ heading, page }: { heading: string, page: string }) {
   
    const backgroundImageClass = getBackgroundImageClass(page);
    return (
        <div class={`header-image ${backgroundImageClass}`}>
          <h1 class="fade-in problem">{heading}</h1>
        </div>
      );
    }