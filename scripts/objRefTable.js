const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Flash,
		C3.Plugins.Touch,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Particles,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Sin.Exps.CyclePosition,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.ResetGlobals
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{CentrarEm: 0},
	{Piscar: 0},
	{Ben10: 0},
	{ESQUERDA: 0},
	{DIREITA: 0},
	{PULO: 0},
	{Toque: 0},
	{Sólido: 0},
	{chao: 0},
	{PORTADEENTRADA: 0},
	{SAIDA: 0},
	{fumaça: 0},
	{barreira: 0},
	{PlanoDeFundoEmBlocos: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{PlanoDeFundoEmBlocos6: 0},
	{PlanoDeFundoEmBlocos8: 0},
	{PlanoDeFundoEmBlocos9: 0},
	{PlanoDeFundoEmBlocos10: 0},
	{PlanoDeFundoEmBlocos11: 0},
	{PlanoDeFundoEmBlocos12: 0},
	{PlanoDeFundoEmBlocos13: 0},
	{PlanoDeFundoEmBlocos14: 0},
	{PlanoDeFundoEmBlocos15: 0},
	{PlanoDeFundoEmBlocos16: 0},
	{chaveiro: 0},
	{Caixa: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Senóide: 0},
	{inimigo: 0},
	{XP: 0},
	{Sprite: 0},
	{botao: 0},
	{Sprite2: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{txtchave: 0},
	{Sprite7: 0},
	{Texto: 0},
	{Áudio: 0},
	{ESTADO: 0},
	{achouchave: 0},
	{vidas: 0},
	{chaves: 0}
];

self.InstanceType = {
	Ben10: class extends self.ISpriteInstance {},
	ESQUERDA: class extends self.ISpriteInstance {},
	DIREITA: class extends self.ISpriteInstance {},
	PULO: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {},
	chao: class extends self.ITiledBackgroundInstance {},
	PORTADEENTRADA: class extends self.ISpriteInstance {},
	SAIDA: class extends self.ISpriteInstance {},
	fumaça: class extends self.IParticlesInstance {},
	barreira: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos6: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos8: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos9: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos10: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos11: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos12: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos13: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos14: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos15: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos16: class extends self.ITiledBackgroundInstance {},
	chaveiro: class extends self.ISpriteInstance {},
	Caixa: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	inimigo: class extends self.ISpriteInstance {},
	XP: class extends self.IParticlesInstance {},
	Sprite: class extends self.ISpriteInstance {},
	botao: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	txtchave: class extends self.ITextInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Áudio: class extends self.IInstance {}
}