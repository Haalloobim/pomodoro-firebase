module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        backgroundColor: {
            'btn-color': 'var(--btn-color)',
            'primary-color': 'var(--primary-color)',
            'secondary-color': 'var(--secondary-color)',
            'tertiary-color': 'var(--tertiary-color)',
        },
        borderColor: {
            'btn-color': 'var(--btn-color)',
        }
      },
    },
    plugins: [],
  };
  