export const ROUTES = {
    EDUCATIONAL: {
        HOME: {
          PATH: '/'
        },
        ABOUT: {
          PATH: '/about'
        },
        APPLY: {
          PATH: '/apply'
        },
        FIELDS: {
          MAIN: {
            PATH: '/fields'
          },
          DETAILS: {
            PATH: '/fields/:id'
          }
        },
        BLOGS: {
          MAIN: {
            PATH: '/blogs'
          },
          DETAILS: {
            PATH: '/blogs/1'
          }
        },
        CAREER: {
          MAIN: {
            PATH: '/careers'
          },
          DETAILS: {
            PATH: '/careers/:id'
          }
        },
    },
    CORPORATE: {
        HOME: {
          PATH: '/corporate'
        },
        CONTACT: {
          PATH: '/corporate/contact'
        },
        SERVICES: {
          MAIN: {
            PATH: '/corporate/services'
          },
          DETAILS: {
            PATH: '/corporate/services/1'
          }
        },
        EVENTS: {
          MAIN: {
            PATH: '/corporate/events'
          },
          DETAILS: {
            PATH: '/corporate/events/1'
          }
        },
    }
};
  

export const ADMIN_ROUTES = {
  HOME: {
    PATH: '/admin'
  },
  
  LOGIN: {
    PATH: '/admin/login'
  },

  ABOUT: {
    MAIN: {
      PATH: '/admin/about'
    },
    NEW_ADVANTAGE: {
      PATH: '/admin/about/form'
    },
    EDIT_ADVANTAGE: {
      PATH: '/admin/about/form/:id'
    }
  },

  EVENTS: {
    MAIN: {
      PATH: '/admin/events'
    },
    CATEGORY: {
      MAIN: {
        PATH: '/admin/events/categories'
      },
      NEW: {
        PATH: '/admin/events/categories/form'
      },
      EDIT: {
        PATH: '/admin/events/categories/form/:id'
      }
    }
  },

  ADVANTAGES: {
    MAIN: {
      PATH: '/admin/advantages'
    },
    NEW_ADVANTAGE: {
      PATH: '/admin/advantages/form'
    },
    EDIT_ADVANTAGE: {
      PATH: '/admin/advantages/form/:id'
    }
  },

  USERS: {
    MAIN: {
      PATH: '/admin/users'
    },
    NEW_USER: {
      PATH: '/admin/users/new'
    }
  },

  COURSES: {
    MAIN: {
      PATH: '/admin/courses'
    },
    NEW_COURSE: {
      PATH: '/admin/courses/form'
    },
    EDIT_COURSE: {
      PATH: '/admin/courses/form/:id'
    }
  },

  APPLIES: {
    ACADEMIC: {
      PATH: '/admin/apply/academic'
    },
    CORPORATE: {
      PATH: '/admin/apply/corporate'
    }
  },

  CATEGORIES: {
    MAIN: {
      PATH: '/admin/categories'
    },
    NEW_CATEGORY: {
      PATH: '/admin/categories/form'
    },
    EDIT_CATEGORY: {
      PATH: '/admin/categories/form/:id'
    }
  },

  VACANCIES: {
    MAIN: {
      PATH: '/admin/vacancies'
    },
    NEW_VACANCY: {
      PATH: '/admin/vacancies/form'
    },
    EDIT_VACANCY: {
      PATH: '/admin/vacancies/form/:id'
    }
  },

  BLOGS: {
    MAIN: {
      PATH: '/admin/blogs'
    },
    NEW_BLOG: {
      PATH: '/admin/blogs/form'
    },
    EDIT_BLOG: {
      PATH: '/admin/blogs/form/:id'
    }
  },

  SERVICES: {
    MAIN: {
      PATH: '/admin/services'
    },
    NEW_SERVICE: {
      PATH: '/admin/services/form'
    },
    EDIT_SERVICE: {
      PATH: '/admin/services/form/:id'
    }
  },
};
