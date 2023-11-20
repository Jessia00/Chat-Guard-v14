const { BaseInteraction } = require('discord.js');

module.exports = Object.defineProperties(BaseInteraction.prototype, {
	translate: {
		value: function(key, args) {
			const language = this.client.translations.get(this.guild?.settings.Language ?? 'en-US');
			if (!language) return 'Dil Seçiniz (.lang tr)';
			return language(key, args);
		},
	},
});