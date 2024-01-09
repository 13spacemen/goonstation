import { useBackend } from '../backend';
import { Box, Button, NumberInput, Stack } from '../components';
import { Window } from '../layouts';

export const PixelOffset = (props, context) => {
  const { act, data } = useBackend(context);

  const {
    x,
    y,
    thing_name,
  } = data;
  return (
    <Window
      title={`Pixel Offsets for ${thing_name}`}
      width={400}
      height={180}>
      <Window.Content>
        <Stack vertical>
          <Stack.Item>
            <Stack>
              <Stack.Item>
                <Box fontSize="3em" width="1.3em">X:</Box>
              </Stack.Item>
              <Stack.Item>
                <Button icon="plus" fontSize="1.5em" onClick={() => act("set_x", { x: x + 1 })} />
                <Button icon="minus" fontSize="1.5em" onClick={() => act("set_x", { x: x - 1 })} />
                <NumberInput
                  value={x}
                  fontSize="35px"
                  stepPixelSize={7}
                  width="2.7em"
                  onDrag={(_, value) => act("set_x", { x: value })}
                />
                <Button
                  icon="sync-alt"
                  color="red"
                  fontSize="1.5em"
                  onClick={() => act("set_x", { x: 0 })}
                />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack>
              <Stack.Item>
                <Box fontSize="3em" width="1.3em">Y:</Box>
              </Stack.Item>
              <Stack.Item>
                <Button icon="plus" fontSize="1.5em" onClick={() => act("set_y", { y: y + 1 })} />
                <Button icon="minus" fontSize="1.5em" onClick={() => act("set_y", { y: y - 1 })} />
                <NumberInput
                  value={y}
                  fontSize="35px"
                  width="2.7em"
                  stepPixelSize={7}
                  onDrag={(_, value) => act("set_y", { y: value })}
                />
                <Button
                  icon="sync-alt"
                  color="red"
                  fontSize="1.5em"
                  onClick={() => act("set_y", { y: 0 })}
                />
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </Window.Content>
    </Window>
  );
};
