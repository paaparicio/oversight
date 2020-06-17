export const paragraphe = {
    methods: {
        getTextParagraphe: function(text) {
            return text.split('\n')
        }
    }
};

export const redirect = {
    methods: {
        setFirstRedirection: function() {
            if(this.$route.name !== 'Introduction') {
                this.$store.commit('setRedirection', this.$route.name);
                this.$router.push({name: 'Introduction'});
            }
        }
    },
    created() {
        this.setFirstRedirection()
    }
};
