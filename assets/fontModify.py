from fontTools.ttLib import TTFont

def adjust_ascent_descent(font_path, new_ascent, new_descent, output_path):
    font = TTFont(font_path)
    hhea = font['hhea']
    os2 = font['OS/2']

    hhea.ascent = 1167
    hhea.descent = -280  # hhea.descent is negative in TTFont

    os2.sTypoAscender = 686
    os2.sTypoDescender = -200
    os2.usWinAscent = 1167
    os2.usWinDescent = 280

    font.save(output_path)
    font.close()

font_path = './duCoBrand_A_Bd_test1.ttf'
new_ascent = 1167  # Set this to your desired ascent value
new_descent = -480  # Set this to your desired descent value
output_path = './duCoBrand_A_Bd_test3.ttf'

adjust_ascent_descent(font_path, new_ascent, new_descent, output_path)
