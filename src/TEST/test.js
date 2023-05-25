test('hero.levelUp to level-2', () => {
    hero.levelUp();
    expect(getResult(hero)).toEqual(startLevel2Expected);
  });
  
  test('hero.damage: is dead', () => {
    hero.damage(500);
    expect(hero.health).toBe(0);
  });
  
  test('hero.damage: dead hero damage did not change!', () => {
    hero.health = 0;
    try {
      hero.damage(500);
    } catch { /* empty */ } finally {
      expect(hero.health).toBe(0);
    }
  });
  
  test('hero.levelUp for dead hero: health is zero and did not change!', () => {
    hero.health = 0;
    try {
      hero.levelUp();
    } catch { /* empty */ } finally {
      expect(hero.health).toBe(0);
    }
  });
  
  test('hero.levelUp for dead hero: level did not change!', () => {
    hero.health = 0;
    const currentLevel = hero.level;
    try {
      hero.levelUp();
    } catch { /* empty */ } finally {
      expect(hero.level).toBe(currentLevel);
    }
  });